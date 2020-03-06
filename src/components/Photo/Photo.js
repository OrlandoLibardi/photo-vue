import { bus } from '../../main'

export default {
    name: "Photo",
    template: "#photo-template",
    props: {
        accept: {
            type: String,
            default: "image/png,image/gif,image/jpeg"
        },
        maxSize: {
            type: Number,
            default: 10
        },
        preview: {
            type: String,
            default: ''
        },
    },
    data() {
        return {
            file: null,
            accepts: this.setAccepts(),
            loaded: null
        };
    },
    methods: {
        clear() {
            this.file = null;
            this.loaded = null;
            this.$emit("clear");
        },
        setAccepts() {
            return (this.accept.indexOf(",") > -1) ? this.accept.split(",") : [this.accept];
        },
        onChange(e) {
            const files = e.target.files || e.dataTransfer.files;
            const file = files[0];
            if (!files.length) return;
            if (this.validFileExtension(file.type) == undefined) return this.showErrorParent('Ahhhh...|Selecione um arquivo válido :( |Ok, entendi!');
            if (this.validFileSize(file.size)) return this.showErrorParent('Opá... Opá.. Opá...|Esse arquivo é muito pesado :/ |Ok, entendi!');
            this.file = file;
            this.render(file);
        },
        render(file) {
            const reader = new FileReader();
            reader.onload = e => {
                const dataURI = e.target.result;
                if (dataURI) {
                    this.loaded = dataURI;
                    this.$emit("load", dataURI);
                }
            };
            reader.readAsDataURL(file);
        },
        validFileExtension(type) {
            return this.accepts.find(item => (item == type));
        },
        validFileSize(size) {
            const sized = size / Math.pow(1000, 2);
            return (!sized || sized > this.maxSize)
        },
        showErrorParent(error) {
            this.clear();
            bus.$emit('showMessage', error);
            console.log("Error");
        }
    }
};