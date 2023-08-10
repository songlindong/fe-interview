<template>
    <div class="plates">
        <div class="plate-flex" v-for="(page, index) in plates" :key="index">
            <div class="plate" v-for="(module, index) in page" :key="index">
                <img :src="module.imgUrl" />
                <div class="name"> {{ module.name }} </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { State, Action } from "vuex-class";

@Component({
    name: 'plates'
})
export default class plates extends Vue {
    @State plates: StoreState.plate[]
}

</script>

<style lang="stylus">
.plates {
    padding: 10px;
    .plate-flex {
        display: flex;

        .plate {
            flex: 1;
            text-align: center;
            background-color: green;
            border-radius: 50%;
            margin: 0 3px;
            padding: 5px;

            img {
                height: 30px;
                width: 30px;
            }
            .name {
                // font-size: 
            }
        }
    }
}
</style>