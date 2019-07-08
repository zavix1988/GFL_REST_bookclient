<template>
    <tr>
        <td>{{ name }}</td>
        <td>{{ price }}</td>
        <td>{{ lang }}</td>
        <td>
            <span v-for="author in authors">{{ author.first_name+" "+ author.last_name}} </span>
        </td>
        <td>
            <span v-for="genre in genres">{{ genre.name }} </span>
        </td>
        <td><button @click="openBook">Посмотреть</button></td>
    </tr>
</template>

<script>
    export default {
        name: "book",
        props: ['book'],
        data(){
            return {

            }
        },
        computed: {
            name() {
                return this.book.name;
            },
            price() {
                return this.book.price;
            },
            lang() {
                return this.book.lang;
            },
            authors(){
              return this.book.authors;
            },
            genres() {
                return this.book.genres;
            }
        },
        methods: {
            openBook(){
                this.$router.push({name: 'BookPage', params: {slug: this.book.slug}})
            }
        }
    }
</script>

<style scoped>

</style>