<template>
    <div class="container">

        <hr/>
        <table class="table table-striped">
            <thead>
            <tr>
                <th>Название</th>
                <th>Цена</th>
                <th>Язык</th>
                <th>Год издания</th>
                <th>ISBN</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>{{ book.name }}</td>
                <td>{{ book.price }}</td>
                <td>{{ book.lang }}</td>
                <td>{{ book.pubyear }}</td>
                <td>{{ book.isbn }}</td>
            </tr>
            <tr>
                <th>Авторы</th>
                <td colspan="2">
                    <span v-for="author in book.authors">{{ author.first_name+" "+author.last_name }}</span>
                </td>
                <th>Жанры</th>
                <td colspan="2">
                    <span v-for="genre in book.genres">{{ genre.name }},&nbsp;</span>
                </td>
            </tr>
            <tr>
                <td colspan="6">{{ book.description }}</td>
            </tr>
            </tbody>
        </table>
        <button type="button" class="btn btn-primary" @click="toCart()">Заказать книгу</button>
    </div>
</template>

<script>
    export default {
        name: "book-page",
        data(){
            return {
               book: {}
            }
        },
        created() {
            axios
                .get('http://bookshop.loc/api/books/book/'+this.$route.params.slug)
                .then(response => (this.book = response.data.book))
        },
        methods: {
            toCart(){
                console.log(this.book.id);
            }
        }
    }
</script>

<style scoped>

</style>