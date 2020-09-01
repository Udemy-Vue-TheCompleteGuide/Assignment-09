<template>
  <div class="container">
    <div v-if="!formSubmitted">
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2">
          <h2>Signup Form</h2>
        </div>
      </div>
      <user-form :signup-data="signupData"
                 @formSubmitting="formSubmitting"></user-form>
    </div>
    <div v-else>
      <div class="row">
        <div class="row">
          <div class="col-xs-12 col-sm-8 col-sm-offset-2">
            <h2>User Signed</h2>
          </div>
        </div>
        <div class="col-xs-12 col-sm-8 col-sm-offset-2">
          <display-user-data :signup-data="signupData" ignup></display-user-data>
          <button @click="goBack">Back</button>
        </div>
      </div>
    </div>

    <hr>
  </div>
</template>

<script>
import DisplayUserData from "@/components/DisplayUserData.vue";
import SignupVM from "@/viewmodels/SignupVM";
import UserForm from "@/components/UserForm.vue";
import User from "@/models/User";

export default {
  name: 'App',

  data() {
    return {
      signupData: new SignupVM(new User('Marlon', 'Fernandez', 'm@g.com', 'P@ssword1'), false),
      formSubmitted: false
    }
  },

  components: {
    DisplayUserData,
    UserForm
  },

  methods: {
    formSubmitting() {
      this.formSubmitted = true;
    },

    goBack() {
      this.formSubmitted = false;
    }
  },

  computed: {
    displayData() {
      return this.formSubmitted ? 'inherit' : 'none';
    }
  }
}
</script>

<style>
h2 {
  text-align: center;
  margin-bottom: 20px;
}
</style>
