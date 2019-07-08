<template>
    <div class="container" id="signup">
        <h1>Регистрация</h1>
        <div class="col-md-7">
            <b-form @submit.prevent="onSubmit">

                <p v-if="errors.length">
                    <b>Пожалуйста исправьте указанные ошибки:</b>
                    <ul>
                        <li v-for="error in errors">{{ error }}</li>
                    </ul>
                </p>

                <b-form-group id="input-group-login" label="Логин:" label-for="login">
                    <b-form-input id="login" v-model="form.login" type="name" required placeholder="Логин" ></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-first-name" label="Имя:" label-for="first-name">
                    <b-form-input id="first-name" v-model="form.first_name" type="name" required placeholder="Имя" ></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-last-name" label="Фамилия:" label-for="last_name">
                    <b-form-input id="last-name" v-model="form.last_name" type="name" required placeholder="Фамилия" ></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-email" label="Email:" label-for="email">
                    <b-form-input id="email" v-model="form.email" type="email" required placeholder="Email" ></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-password" label="Пароль:" label-for="password">
                    <b-form-input id="password" v-model="form.password" type="password" required placeholder="Пароль" ></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-retry" label="Повторите пароль:" label-for="retry">
                    <b-form-input id="retry" v-model="form.retry" type="password" required placeholder="Повторите пароль" ></b-form-input>
                </b-form-group>

                <b-button type="submit" variant="primary">Submit</b-button>
            </b-form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SignUp",
        data(){
            return{
                errors:[],
                form: {
                    first_name: '',
                    last_name: '',
                    email: '',
                    login: '',
                    password: '',
                    retry: ''
                }
            }
        },
        methods: {
            onSubmit() {
                if (this.checkForm()){
                    axios.post('http://tc.geeksforless.net/~user12/bookclient/api/user/signup', 'first_name='+this.form.first_name+
                                                                 '&last_name='+this.form.last_name+
                                                                 '&email='+this.form.email+
                                                                 '&login='+this.form.login+
                                                                 '&password='+this.form.password+
                                                                 '&retry='+this.form.retry)
                        .then(response => {
                            if(response.data.result === false){
                                this.errors.push('Регистрация не удалась');
                                this.form.password = '';
                                this.form.retry = '';
                            }else{
                                this.$router.push({name: 'LogIn'})
                            }
                        })
                }else{
                    this.errors.push('Регистрация не удалась');

                }
            },
            checkForm(){
                if(this.form.password === this.form.retry){
                    if (this.validEmail(this.form.email)) {
                        return true;
                    }else{
                        this.errors.push('Укажите электронную почту.');
                    }
                }else{
                    this.errors.push('Пароли не совпадают');
                    return false;
                }
            },
            validEmail: function (email) {
                var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(email);
            }
        }
    }
</script>

<style scoped>

</style>