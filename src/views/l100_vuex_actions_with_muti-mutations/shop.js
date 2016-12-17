class Shop {
  buyProducts (products, success, fail) {
    // url是随便拿来测试的
    fetch('/').then(success, fail)
  }
}

export default new Shop()
