<template>
    <div class="products">
        <div class="filters">
            Category
            <select v-model="model.categories">
                <option value="">Все категории</option>
                <option
                        v-for="category in categories"
                        :value="category.id"
                >
                    {{ category.name }}
                </option>
            </select>
            Sizes
            <select  v-model="model.sizes">
                <option
                        v-for="size in sizes"
                        :value="size.id"
                >
                    {{ size.name }}
                </option>
            </select>
            Color
            <select  v-model="model.colors">
                <!--<option-->
                        <!--v-for="color in colors"-->
                        <!--:value="color.id"-->
                <!--&gt;-->
                    <!--{{ color.name }}-->
                <!--</option>-->
            </select>
            Sort
            <select  v-model="model.sorts">
                <!--<option-->
                        <!--v-for="sort in sorts"-->
                        <!--:value="sort.id"-->
                <!--&gt;-->
                    <!--{{ sort.name }}-->
                <!--</option>-->
            </select>
            <div id="example">
                <button
                        @click="">
                    Clear Filter
                </button>
            </div>
        </div>
        <ul>
            <li v-for="p in products" v-if="categoryFilter(p)">
                <h2>{{ p.title }}</h2>
                <img :src="p.image" alt="">
                <p>Price: {{ p.price | currency }}</p>
                <p>Size: {{ p.size }}</p>
                <p>Inventory: {{ p.inventory }}</p>
                <p>Category: {{ p.category }}</p>
                <p>Filtered: {{ model.categories }}</p>
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
          'categories': '',
          'sizes': '',
          'colors': 'black',
          'sorts': '',
          'search': ''
        }
      }
    },
    computed: {
      ...mapGetters({
        products: 'allProducts',
        categories: 'allCategories',
        sizes: 'allSizes'
      })
    },
    methods: {
      ...mapActions([
        'addToCart'
      ]),
      categoryFilter (p) {
        if (this.model.categories === '') {
          return true
        }
        if (p.category === this.model.categories) {
          return true
        } else {
          return false
        }
      }
    },
    created () {
      this.$store.dispatch('getAllProducts')
      this.$store.dispatch('getAllCategories')
      this.$store.dispatch('getAllSizes')
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
