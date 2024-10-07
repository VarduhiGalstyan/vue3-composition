<template>
    <h3>Computed Property</h3>
    <div>Employees Present: {{ isEmployeesPresent}}</div>
</template>

<script>
 export default{
    data() {
        return{
            employees: ['emp1', 'emp2']
        };
    },
    computed: {
        isEmployeesPresent(){
            return this.employees.length > 0 ? 'Yes' : 'No';
        }
    }
 };
</script>