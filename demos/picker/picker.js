// demos/picker/picker.js

const date = new Date();
const years = [];
const months = [];
const days = []

for(let i = 1990; i <= date.getFullYear(); i++) {
  years.push(i);
}
for(let i = 1; i <= 12; i++) {
  months.push(i);
}
// assuming that every month has 31 days
for(let i = 1; i <= 31; i++) {
  days.push(i);
}

Page({

  /**
   * Page initial data
   */
  data: {
    array: ['Taylor Swift', 'Troye Sivan', 'Maisie Peters'],
    index: 0,
    multiArr: [['无脊柱动物', '脊柱动物'], ['扁性动物', '线形动物', '环节动物', '软体动物', '节肢动物'], ['猪肉绦虫', '吸血虫']],
    multiIndex: [0, 0, 0],
    year: date.getFullYear(),
    month: 1,
    day: 1,
    years,
    months,
    days,
    values: [9999, 0, 0]
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  },

  bindPickerChange: function (e) {
    this.setData({
      index: e.detail.value
    });
  },

  bindPickerCancel: function (e) {
    console.log('Selection has been canceled.')
  },

  bindChange: function (e) {
    const val = e.detail.value;
    this.setData({
      year: this.data.years[val[0]],
      month: this.data.months[val[1]],
      day: this.data.days[val[2]]
    })
  }
})