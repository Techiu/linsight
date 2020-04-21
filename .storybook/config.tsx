/*
 * @Description:
 * @Date: 2020-04-21 11:13:01
 * @LastEditTime: 2020-04-21 14:30:39
 */
import React from 'react'
import { configure, addDecorator, addParameters } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import '../src/styles/index.scss'

// automatically import all files ending in *.stories.js
configure(require.context('../src', true, /\.stories\.tsx$/), module)

const wrapperStyle: React.CSSProperties = {
  padding: '20px 40px'
}

const storyWrapper = (storyFn: any) => <div style={wrapperStyle}>
  <h3>组件演示</h3>
  {storyFn()}</div>

addDecorator(storyWrapper)
addDecorator(withInfo)
addParameters({ info: { inline: true, header: false } })
