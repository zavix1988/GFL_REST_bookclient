<template>
    <div class="container">
        <h1 class="text-center">Книги</h1>
        <hr/>
        <div class="row">
            <div class="col-md-2">
                <h4>Фильтр</h4>
                <form class="form" @submit.prevent="getFilter()">
                    <div class="form-group">
                        <label for="author">Автор</label>
                        <select  name="author" class="form-control" id="lang">
                            <option value="0" selected>Автор</option>
                            <option v-for="author in authors" :value="author.id">{{author.first_name + " " + author.last_name}}</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="genre">Жанр</label>
                        <select name="genre" class="form-control" id="lang">
                            <option value="0" selected>Жанр</option>
                            <option v-for="genre in genres" :value="genre.id">{{ genre.name }}</option>
                        </select>
                    </div>
                    <button type="submit" class="btn btn-secondary">Посмотреть</button>
                </form>
            </div>
            <div class="col-md-10">
                <table class="table table-striped">
                    <thead>
                    <tr>
                        <th>Название</th>
                        <th>Цена</th>
                        <th>Язык</th>
                        <th>Авторы</th>
                        <th colspan="2">Жанры</th>
                    </tr>
                    </thead>
                    <tbody>
                        <book v-for="(book, key) in books" :book="book" :key="key"></book>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "books",
        data(){
            return {
                books: {},
                authors:{},
                genres:{}
            }
        },
        created() {
            axios
                .get('http://bookclient.loc/api/books/allbooks')
                .then(response => {
                        this.books = response.data.books;
                        this.authors = response.data.authors;
                        this.genres = response.data.genres
                    }
                ).catch(error => console.log(error));
        },
        methods: {
            getFilter(){
                console.log('filter');
            }
        }
    }
</script>

<style scoped>

</style>