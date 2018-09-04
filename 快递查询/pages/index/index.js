Page({
  data: {
    inputValue:null,
    selectExpress: null,
    expressInfo: null,
    companys: [
      {
        "com": "顺丰",
        "no": "sf"
      },
      {
        "com": "申通",
        "no": "sto"
      },
      {
        "com": "圆通",
        "no": "yt"
      },
      {
        "com": "韵达",
        "no": "yd"
      },
      {
        "com": "天天",
        "no": "tt"
      },
      {
        "com": "中通",
        "no": "zto"
      }
    ]
  },
  bindKeyInput: function (e) {
    this.setData({
      inputValue: e.detail.value,
    })
  },

  radioChange: function (e) {
    this.setData({
      selectExpress: e.detail.value,
    })
  },
  btnSelect: function () {
    var that = this;
    var num = this.data.inputValue;
    var express = this.data.selectExpress;

    wx.request({
      url: 'https://v.juhe.cn/exp/index',
      data: {
        key: "your key",
        com: express,
        no: num
      },
      success:function(res){
      console.log(res.data.result.list);
      that.setData({
      expressInfo: res.data.result.list
      })
      }
    })
  }

})