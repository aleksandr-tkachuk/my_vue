/**
 * Created by alex on 22.09.17.
 */

const _products = [
  {
    'id': 1,
    'title': 'iPad 4 Mini',
    'price': 500.01,
    'inventory': 2,
    'category': 1,
    'size': 10,
    'color': 'red',
    'image': 'https://s-media-cache-ak0.pinimg.com/originals/41/86/33/4186337b4004ea96018a30b4749f8370.jpg',
    'images': [{
      0: 'https://s-media-cache-ak0.pinimg.com/originals/41/86/33/4186337b4004ea96018a30b4749f8370.jpg',
      1: 'https://s-media-cache-ak0.pinimg.com/originals/41/86/33/4186337b4004ea96018a30b4749f8370.jpg'
    }]
  },
  {
    'id': 2,
    'title': 'iPad 4 Mini',
    'price': 500.01,
    'inventory': 3,
    'categoryId': 1,
    'size': 10,
    'color': 'red',
    'image': 'https://s-media-cache-ak0.pinimg.com/originals/41/86/33/4186337b4004ea96018a30b4749f8370.jpg',
    'images': [{
      0: 'https://s-media-cache-ak0.pinimg.com/originals/41/86/33/4186337b4004ea96018a30b4749f8370.jpg',
      1: 'https://s-media-cache-ak0.pinimg.com/originals/41/86/33/4186337b4004ea96018a30b4749f8370.jpg'
    }]
  },
  {
    'id': 3,
    'title': 'iPad 4 Mini',
    'price': 500.01,
    'inventory': 2,
    'categoryId': 2,
    'size': 10,
    'color': 'red',
    'image': 'https://s-media-cache-ak0.pinimg.com/originals/41/86/33/4186337b4004ea96018a30b4749f8370.jpg',
    'images': [{
      0: 'https://s-media-cache-ak0.pinimg.com/originals/41/86/33/4186337b4004ea96018a30b4749f8370.jpg',
      1: 'https://s-media-cache-ak0.pinimg.com/originals/41/86/33/4186337b4004ea96018a30b4749f8370.jpg'
    }]
  },
  {
    'id': 4,
    'title': 'iPad 4 Mini',
    'price': 500.01,
    'inventory': 2,
    'categoryId': 3,
    'size': 10,
    'color': 'red',
    'image': 'https://s-media-cache-ak0.pinimg.com/originals/41/86/33/4186337b4004ea96018a30b4749f8370.jpg',
    'images': [{
      0: 'https://s-media-cache-ak0.pinimg.com/originals/41/86/33/4186337b4004ea96018a30b4749f8370.jpg',
      1: 'https://s-media-cache-ak0.pinimg.com/originals/41/86/33/4186337b4004ea96018a30b4749f8370.jpg'
    }]
  },
  {
    'id': 5,
    'title': 'iPad 4 Mini',
    'price': 500.01,
    'inventory': 2,
    'categoryId': 2,
    'size': 10,
    'color': 'red',
    'image': 'https://s-media-cache-ak0.pinimg.com/originals/41/86/33/4186337b4004ea96018a30b4749f8370.jpg',
    'images': [{
      0: 'https://s-media-cache-ak0.pinimg.com/originals/41/86/33/4186337b4004ea96018a30b4749f8370.jpg',
      1: 'https://s-media-cache-ak0.pinimg.com/originals/41/86/33/4186337b4004ea96018a30b4749f8370.jpg'
    }]
  }

]

const _category = [
  {
    'id': 1,
    'name': 'category 1'
  },
  {
    'id': 2,
    'name': 'category 2'
  },
  {
    'id': 3,
    'name': 'category 3'
  }
]
export default {
  getProducts (cb) {
    setTimeout(() => cb(_products), 100)
  },
  buyProducts (products, cb, errorCb) {
    setTimeout(() => {
      // simulate random checkout failure.
      (Math.random() > 0.5 || navigator.userAgent.indexOf('PhantomJS') > -1)
        ? cb()
        : errorCb()
    }, 100)
  },
  getCategory (cb) {
    setTimeout(() => cb(_category), 100)
  }
}
