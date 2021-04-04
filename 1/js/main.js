const PLANCK_LENGTH = new Decimal(1.616229e-35);
var dt1 = Date.now(), dt2 = Date.now();
var keyMap = [];
var saveTimer = 0;
var stubbornComponents = ["layers", "body", "sho", "tabNav"];
var initialGame;

var numberFormatters = [
    new ADNotations.StandardNotation(),
    new ADNotations.EngineeringNotation(),
    new ADNotations.ScientificNotation(),
    new ADNotations.LogarithmNotation(),
    new ADNotations.InfinityNotation(),
    new ADNotations.CancerNotation()
]; // notations

var app = new Vue({
    el: "#app",
    data: game,
    computed: computed,
    methods: functions,
    created: onCreate
});
