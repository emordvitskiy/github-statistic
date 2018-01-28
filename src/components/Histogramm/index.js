import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import * as d3 from 'd3'
import ReactFauxDOM from 'react-faux-dom'

export default class Histogram extends PureComponent {
  static propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
      days: PropTypes.arrayOf(PropTypes.number).isRequired,
      week: PropTypes.number.isRequired
    }))
  }

  static defaultProps = {
    data: []
  }

  renderD3 = () => {
    const { data } = this.props
    const _data = data.reduce((arr, week) => {
      const weekData = week.days.map((dayStats, i) => ({
        date: 1000 * (week.week + i * 86400),
        val: dayStats
      }))

      return arr.concat(weekData)
    }, [])

    const margin = {
      top: 10,
      right: 30,
      bottom: 30,
      left: 30
    }
    const width = 960 - margin.left - margin.right
    const height = 500 - margin.top - margin.bottom

    const svg = d3.select(ReactFauxDOM.createElement('svg'))
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)

    svg.append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`)

    const xScale = d3.scaleTime()
      .domain([
        new Date(_data[0].date),
        new Date(_data[_data.length - 1].date)
      ])
      .rangeRound([0, width])
    const yScale = d3.scaleLinear()
      .range([height, 0])

    const histogram = d3.histogram()
      .value((d) => { return d.date })
      .domain(xScale.domain())
      .thresholds(xScale.ticks(d3.timeWeek))

    svg.append('g')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(xScale))

    const bins = histogram(_data)

    yScale.domain([0, d3.max(bins, (d) => d.length)])

    const sum = (d) => d.reduce((sum, el) => {
      return sum + el.val
    }, 0)
    // const formatCount = d3.format(',.0f')

    const bar = svg.selectAll('.bar')
      .data(bins)
      .enter().append('g')
      .attr('class', 'bar')
      .attr('transform', (d) => `translate(${xScale(d.x0)},${yScale(sum(d))})`)

    bar.append('rect')
      .attr('x', 1)
      .attr('fill', 'steelblue')
      .attr('width', (d) => xScale(d.x1) - xScale(d.x0) - 1)
      .attr('height', (d) => height - yScale(sum(d)))

    return svg.node().toReact()
  }

  render () {
    return (
      <div ref={el => { this.el = el }}>
        { this.renderD3() }
      </div>
    )
  }
}
