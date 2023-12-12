import Component from "./component.js"
import { clamp } from "./utilities.js";

class Health extends Component {

    constructor(maxHP = 3) {
        super(0, 0);

        this.maxHP = maxHP;
        this.HP = maxHP;
    }

    damage(damage = 1) {

        this.HP -= damage;
    }

    heal(heal = 1) {

        this.HP += heal;
        this.HP = clamp(this.HP, 0, this.maxHP);
    }

}

export default Health;
