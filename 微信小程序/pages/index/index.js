//index.js
Page({
  data: {
    text: '标题',
    num: 0,
    array: [{text: '标题'}],
    object: {
      text: '对象'
    }
  },
  changeText: function() {
    // this.data.text = 'changed data'  // bad, it can not work
    this.setData({
      text: '切换标题'
    })
  },
  pathTo:function(){
    wx.navigateTo({
      url: '../scroll/scroll'
    })
  },
  changeNum: function() {
    this.data.num = 1
    this.setData({
      num: this.data.num
    })
  },
  changeItemInArray: function() {
    // you can use this way to modify a danamic data path
    this.setData({
      'array[0].text':'改变数组的标题'
    })
  },
  changeItemInObject: function(){
    this.setData({
      'object.text': '改变对象标题'
    });
  },
  addNewField: function() {
    this.setData({
      'newField.text': '创建新标题'
    })
  }
})