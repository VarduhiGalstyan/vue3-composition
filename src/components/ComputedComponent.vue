<template>
    <h3>Computed Property</h3>
    <div>Employees Present: {{ isEmployeesPresent}}</div>
    <div>FullName: {{ fullName }}</div>
</template>

<script setup>
 import { computed, reactive, ref } from 'vue';

 const employees = reactive(['emp1', 'emp2']);

 const firstName =  ref('Leela');
 const lastName = ref('WebDev');
 
 const isEmployeesPresent = computed(() => {
    return employees.length ? 'Yes Computed': 'No';
 });

 const fullName = computed({
    // return firstName.value + ' ' + lastName.value
    get() {
        return firstName.value + ' ' + lastName.value;
    },
    set(newValue){
        [firstName.value, lastName.value] = newValue.split(' ');
    }
 });

 fullName.value = 'Hi Leela';

</script>