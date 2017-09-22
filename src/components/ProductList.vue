<template>
    <div class="products">
        <div class="filters">
            Category
            <select @change="filterByCategory" v-model="model.categories">
                <option
                        v-for="category in categories"
                        :value="category.id"
                >
                    {{ category.name }}
                </option>
            </select>
            Size
            <select @change="filterBySize" v-model="model.sizes">
                <option
                        v-for="size in sizes"
                        :value="size.id"
                >
                    {{ size.name }}
                </option>
            </select>
            Color
            <select @change="filterByColor" v-model="model.colors">
                <option
                        v-for="color in colors"
                        :value="color.id"
                >
                    {{ color.name }}
                </option>
            </select>
            Sort
            <select @change="filterBySort" v-model="model.sorts">
                <option
                        v-for="sort in sorts"
                        :value="sort.id"
                >
                    {{ sort.name }}
                </option>
            </select>
            <div id="example">
                <button
                        @click="">
                    Clear Filter
                </button>
            </div>
        </div>
        <ul>
            <li v-for="p in products">
                <h2>{{ p.title }}</h2>
                <img :src="p.image" alt="">
                <p>Price: {{ p.price | currency }}</p>
                <p>Inventory: {{ p.inventory }}</p>
                <br>
                <button
                        :disabled="!p.inventory"
                        @click="addToCart(p)">
                    Add to cart
                </button>
            </li>
        </ul>
    </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  export default {
    data () {
      return {
        model: {
          'categories': 1,
          'sizes': 's',
          'color': 'blac',
          'sors': ''
        }
      }
    },
    computed: {
      ...mapGetters({
        products: 'getProductsByCategory',
        categories: 'allCategories'
      })
    },
    methods: {
      filterByCategory () {
        this.$store.commit('UPDATE_CURRENT_CATEGORIE', {category: this.model.categories})
      },
      filterBySize () {
        this.$store.commit('UPDATE_CURRENT_CATEGORIE', {size: this.model.sizes})
      },
      ...mapActions([
        'addToCart'
      ])
    },
    created () {
      this.$store.dispatch('getAllProducts')
      this.$store.dispatch('getAllCategories')
    }
  }
</script>

<style lang="scss" scoped>
    img {
        max-width: 100%;
    }
    ul {
        display: inline-block;
        li{
            padding: 10px;
            display: inline-block;
            width: 27%;
            list-style: none;
        }
    }
</style>
