<template>
  <div class="panel panel-default">
    <div class="panel-heading">
      <h4>Your Data</h4>
    </div>
    <div class="panel-body">
      <full-name :f-name="signupData.user.fName"
                 :l-name="signupData.user.lName"></full-name>
      <p>Mail: {{ signupData.user.email }}</p>
      <p>Password: {{signupData.user.password }}</p>
      <p>Store in Database?: {{ signupData.saveDataRead}}</p>
    </div>
  </div>
</template>

<script>
import SignupVM from "@/viewmodels/SignupVM";
import FullName from "@/components/FullName.vue";

export default {
  name: 'DisplayUserData',

  components: {
    FullName
  },

  props: {
    signupData: SignupVM
  }
}
</script>

<style scoped>

</style>
