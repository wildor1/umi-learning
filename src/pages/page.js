import {Component} from 'react'

const sidebar = {
  float:'left',
  width: '400px',
  margin: '30px',
  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
  border: '1px solid #e8e8e8',
};
const main = {
  float:'right',
  right:'10px',
  width: '400px',
  margin: '30px',
  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
  border: '1px solid #e8e8e8',
};
class Card extends Component {
  render () {
    return (
      <div>
        <div>
          {this.props.content}
        </div>
        <div style={sidebar}>
          {this.props.children[0]}
        </div>
        <div style={main}>
          {this.props.children[1]}
        </div>
      </div>
    )
  }
}

// 比如渲染包含 “Ant Design 实战教程” 字样的div
export default () => {
  return(
    <Card content={
      <div>
        Ant Design 实战教程
      </div>
    }>
     <p>我是children0001</p>
      <p>我是children0002</p>
    </Card>
  )
}


