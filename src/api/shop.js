/**
 * Created by alex on 22.09.17.
 */

const _products = [
  {
    'id': 1,
    'title': 'T-shirt',
    'price': 500.01,
    'inventory': 2,
    'category': 1,
    'size': 1,
    'color': 'red',
    'image': 'http://gabbi.in.ua/wa-data/public/shop/products/73/08/873/images/20340/detskaya-futbolka-belaya.0x970.jpg',
    'images': [{
      0: 'http://gabbi.in.ua/wa-data/public/shop/products/73/08/873/images/20340/detskaya-futbolka-belaya.0x970.jpg',
      1: 'http://gabbi.in.ua/wa-data/public/shop/products/73/08/873/images/20340/detskaya-futbolka-belaya.0x970.jpg'
    }]
  },
  {
    'id': 2,
    'title': 'T-shirt',
    'price': 500.01,
    'inventory': 3,
    'category': 1,
    'size': 2,
    'color': 'red',
    'image': 'https://www.printsalon.ua/images/products/view/bez-risunka_11.jpg',
    'images': [{
      0: 'https://www.printsalon.ua/images/products/view/bez-risunka_11.jpg',
      1: 'https://www.printsalon.ua/images/products/view/bez-risunka_11.jpg'
    }]
  },
  {
    'id': 3,
    'title': 'cap',
    'price': 500.01,
    'inventory': 2,
    'category': 2,
    'size': 2,
    'color': 'blue',
    'image': 'https://images-na.ssl-images-amazon.com/images/I/91myHtTQvyL._SX522_.jpg',
    'images': [{
      0: 'https://images-na.ssl-images-amazon.com/images/I/91myHtTQvyL._SX522_.jpg',
      1: 'https://images-na.ssl-images-amazon.com/images/I/91myHtTQvyL._SX522_.jpg'
    }]
  },
  {
    'id': 4,
    'title': 'cap',
    'price': 500.01,
    'inventory': 2,
    'category': 2,
    'size': 3,
    'color': 'white',
    'image': 'https://images-na.ssl-images-amazon.com/images/I/61-sGOu7pAL._UL1500_.jpg',
    'images': [{
      0: 'https://images-na.ssl-images-amazon.com/images/I/61-sGOu7pAL._UL1500_.jpg',
      1: 'https://images-na.ssl-images-amazon.com/images/I/61-sGOu7pAL._UL1500_.jpg'
    }]
  },
  {
    'id': 5,
    'title': 'jacket',
    'price': 500.01,
    'inventory': 2,
    'category': 3,
    'size': 3,
    'color': 'black',
    'image': 'http://i3.stycdn.net/images/2013/04/17/article/anerkjendt/kj10w01201/anerkjendt-kuno-jacke-cavia-1330-zoom-0.jpg',
    'images': [{
      0: 'http://i3.stycdn.net/images/2013/04/17/article/anerkjendt/kj10w01201/anerkjendt-kuno-jacke-cavia-1330-zoom-0.jpg',
      1: 'http://i3.stycdn.net/images/2013/04/17/article/anerkjendt/kj10w01201/anerkjendt-kuno-jacke-cavia-1330-zoom-0.jpg'
    }]
  }

]

const _category = [
  {
    'id': 1,
    'name': 'category x'
  },
  {
    'id': 2,
    'name': 'category y'
  },
  {
    'id': 3,
    'name': 'category z'
  }
]
const _sizes = [
  {
    'id': 1,
    'name': 'S'
  },
  {
    'id': 2,
    'name': 'M'
  },
  {
    'id': 3,
    'name': 'L'
  }
]
export default {
  getProducts (cb) {
    setTimeout(() => cb(_products), 100)
  },
  getCategory (cb) {
    setTimeout(() => cb(_category), 100)
  },
  getSizes (cb) {
    setTimeout(() => cb(_sizes), 100)
  }
}
