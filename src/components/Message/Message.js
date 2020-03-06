import { bus } from "../../main";
export default {
    name: "Message",
    template: "#message-template",
    props: {
        btnCss: {
            type: String,
            default: 'message-btn-default'
        }
    },
    data() {
        return {
            messageTitle: null,
            messageText: null,
            messageConfirmText: "Ok, entendi!"
        };
    },
    created() {
        bus.$on("showMessage", data => {
            this.show(data);
        });
    },
    methods: {
        show(data) {
            let array = data.indexOf("|") > -1 ? data.split("|") : [data];
            const [title, text, btn] = array;
            this.messageTitle = title != undefined ? title : null;
            this.messageText = text != undefined ? text : null;
            this.messageConfirmText = btn != undefined ? btn : this.messageConfirmText;
        },
        hidden() {
            this.clear();
        },
        clear() {
            this.messageTitle = null;
            this.messageText = null;
            this.messageClass = null;
        },
    }
};