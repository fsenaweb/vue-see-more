<template>
    <div class="vue-see-more">
        <p v-if="allowHtml" v-html="formatText" :class="[textStyle ? textStyle : '']"></p>
        <p v-else :class="[textStyle ? textStyle : '']">{{ formatText }}</p>
        <span v-show="toText.length > countLettersNumber">
            <button
                type="button"
                :class="['vue-see-more-btn', linkStyle]"
                v-show="!activeSeeMore"
                @click="handleSeeText(true)"
            >
                {{ seeMore }}
            </button>
            <button
                type="button"
                :class="['vue-see-more-btn', linkStyle]"
                v-show="activeSeeMore"
                @click="handleSeeText(false)"
            >
                {{ seeLess }}
            </button>
        </span>
    </div>
</template>

<script>
export default {
    data: () => {
        return ({
            activeSeeMore: false
        });
    },
    props: {
        seeMore: {
            type: String,
            default: 'See More'
        },
        seeLess: {
            type: String,
            default: 'Retract'
        },
        toText: {
            type: String,
            required: true
        },
        textStyle: {
            type: String,
            default: ''
        },
        linkStyle: {
            type: String,
            default: ''
        },
        countLetters: {
            type: [String, Number],
            default: 80
        },
        allowHtml: {
            type: Boolean,
            default: false
        },
        ellipsis: {
            type: String,
            default: ' [...] '
        }
    },
    computed: {
        countLettersNumber() {
            return parseInt(this.countLetters, 10);
        },
        formatText() {
            if (this.activeSeeMore || this.toText.length <= this.countLettersNumber) {
                return this.toText;
            }

            let truncatedText = this.toText.substring(0, this.countLettersNumber);
            const lastSpaceIndex = truncatedText.lastIndexOf(' ');

            if (lastSpaceIndex > 0) {
                truncatedText = truncatedText.substring(0, lastSpaceIndex);
            }

            return truncatedText + this.ellipsis;
        }
    },
    methods: {
        handleSeeText(value) {
            this.activeSeeMore = value;
            this.$emit(value ? 'expand' : 'retract');
        }
    }
};
</script>

<style scoped>
.vue-see-more-btn {
    background: none;
    border: none;
    padding: 0;
    font: inherit;
    color: #007bff;
    cursor: pointer;
    text-decoration: underline;
}
</style>
