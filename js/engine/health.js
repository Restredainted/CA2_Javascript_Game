import Component from "./component.js"
import { clamp } from "./utilities.js";

class Health extends Component {

    constructor(maxHP) {
        super(0, 0);

        this.maxHP = maxHP;
        this.HP = maxHP;
    }

    damage(damage) {

        this.HP -= damage;
    }

    heal(heal) {

        this.HP += heal;
        this.HP = clamp(this.HP, 0, this.maxHP);
    }

}

export default Health;
