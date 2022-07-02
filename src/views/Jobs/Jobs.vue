<template>
  <h1>Jobs</h1>
  <div class="jobs" v-for="job in jobs" :key="job.id">
    <router-link :to="{name:'jobsDetail',params:{detail:job.detail}}">
    <h1>{{job.title}}</h1>
    </router-link>
  </div>
</template>

<script>
export default {
    data(){
        return{
            jobs:[
                {id:"1",title:"Project Manager",detail:"Project Management"},
                {id:"2",title:"Web Developer",detail:"Web Development"},
                {id:"3",title:"Web Designer",detail:"Web Design"}
            ]
        }
    }

}
</script>

<style>
.jobs{
    color: crimson;
}
</style>