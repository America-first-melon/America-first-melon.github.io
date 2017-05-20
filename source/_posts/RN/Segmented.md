---
title: 类似SegmentedControlIOS 和 SegmentedControlIOS 的使用
date: 2017-05-01 13:01:00
categories:
- 框架+库
- React Native
---


#### 场景1

类似SegmentedControlIOS，分段显示。

<!--more-->

*如图：

![](/assets/rn/8.gif)

*实现方法：

定义一个含有index属性的组件`<Button>`,当点击的时候判断`<TouchableOpacity>`的index是否和`<Button>`的index相等来实现效果。

*代码：

```javascript
	export default class Wrap extends Component{
		state = {
  			cashValue: 31,
  			index: 0,
		};
		handleClick(index,value){
			this.setState({
				index : index,
				cashValue : value,
			})
		};
		render(){
			return(
				<Button clk = {this.handleClick.bind(this)} index={this.state.index} />
			)
		}
	}
	
	class Button extends Component{
		render(){
			return(
				<View>
					{
						[30,100,500,1000].map(
							(ele , index) => {
								let activeStyle = {
									color:this.props.index == index ? 'red' : 'black',
									borderColor:this.props.index == index ? 'red' : 'black',
								};
								return(
									<TouchableOpacity key={index} onPress={this.props.clk.bind( null, index , ele)} activeOpacity={1} >
										<Text style={[styles.commonStyle,activeStyle]} >{ele}元</Text>
									</TouchableOpacity>
								)
							}
						)
					}
				</View>
			)
		}
	}
```

#### 场景2

SegmentedControlIOS来实现分段显示多个选项的渲染内容。

`注意：react-native-radio-buttons有一样的插件，安卓通用`

*如图：

![](/assets/rn/9.gif)

*实现方法：

当点击组件的某个Value的时候根据当前的index去判断需要渲染哪些数据

*代码：

```bash
	import {SegmentedControlIOS} from 'react-native';
	export default class Contents extends Component {
		state = {
			type : 0
		};
		// 更改type
		handleClick = (index) => {
  		this.setState({
    			type: index,
  			});
		};
		// 渲染
		renderTabContent = () => {
		  if (this.state.type === 0) {
		    return (
		      <View>1</View>
		    );
		  } else if (this.state.type === 1) {
		    return (
		      <View>2</View>
		    );
		  } else if (this.state.type === 2) {
		    return (
		      <View>3</View>
		    );
		  }
		};
		render(){
			return(
				<View>
					<SegmentedControlIOS
					  values={['详情', '礼包', '攻略']}
					  tintColor="#ffc000"
					  selectedIndex={0}
					  style={{ width: width - 75, alignSelf: 'center', marginBottom: 8 }}
					  onChange={(event) => { this.handleClick(event.nativeEvent.selectedSegmentIndex); }}
/>
{this.renderTabContent()}
				</View>
			)
		}
	}

```


