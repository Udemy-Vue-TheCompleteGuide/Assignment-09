<template>
  <!-- Exercise 1 -->
  <!-- Create a Signup Form where you retrieve the following Information -->
  <!-- Full Name (First Name + Last Name) -->
  <!-- Mail -->
  <!-- Password -->
  <!-- Store Data? Yes/No -->

  <!-- Exercise 2 -->
  <!-- Only display the Form if it has NOT been submitted -->
  <!-- Display the Data Summary ONCE the Form HAS been submitted -->

  <!-- Exercise 3 -->
  <!-- Edit the Example from above and create a custom "Full Name" Control -->
  <!-- which still holds the First Name and Last Name Input Field -->


  <div class="row">
    <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
      <form class="form-horizontal">
        <div class="form-group">
          <label for="fName" class="col-sm-3 control-label">First Name</label>
          <div class="col-sm-9">
            <input type="text" class="form-control" id="fName" placeholder="First Name"
                   v-model="fName">
          </div>
        </div>
        <div class="form-group">
          <label for="lName" class="col-sm-3 control-label">Last Name</label>
          <div class="col-sm-9">
            <input type="text" class="form-control" id="lName" placeholder="Last Name"
                   v-model="lName">
          </div>
        </div>
        <div class="form-group">
          <label for="email" class="col-sm-3 control-label">Email</label>
          <div class="col-sm-9">
            <input type="email" class="form-control" id="email" placeholder="Email"
                   v-model="email">
          </div>
        </div>
        <div class="form-group">
          <label for="password" class="col-sm-3 control-label">Password</label>
          <div class="col-sm-9">
            <input type="password" class="form-control" id="password" placeholder="Password"
                   v-model="password">
          </div>
        </div>
        <div class="form-group">
          <div class="col-sm-offset-2 col-sm-9">
            <div class="checkbox">
              <label>
                <input type="checkbox" v-model="saveData"> Store data
              </label>
            </div>
          </div>
        </div>
        <div class="form-group">
          <div class="col-sm-offset-2 col-sm-9">
            <button type="submit" class="btn btn-default"
                    @click.prevent="sendData">
              Sign in
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import SignupVM from "../viewmodels/SignupVM";

export default {
  name: 'UserForm',

  data() {
    return {
      fName: this.signupData.user.fName,
      lName: this.signupData.user.lName,
      email: this.signupData.user.email,
      password: this.signupData.user.password,
      saveData: this.signupData.saveData
    };
  },

  props: {
    signupData: SignupVM
  },

  methods: {
    sendData() {
      this.signupData.user.fName = this.fName;
      this.signupData.user.lName = this.lName;
      this.signupData.user.email = this.email;
      this.signupData.user.password = this.password;
      this.signupData.saveData = this.saveData;

      this.$emit('formSubmitting', true);
    }
  }
}
</script>

<style scoped>

</style>
