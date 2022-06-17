/**
 * 
 */
class Crop {
    #name // name of crop
    #growth = 0 // decimal percent of growth. ie 0 - 1
    #quality = 5 // quality between 0 and 10. 5 is typical
    #yield = 1 // multiplyer for crop yield
    #yieldUpperLimit = 2
    #weight = 0

    // /**
    //  * 
    //  * @param {string} name The name of the crop.
    //  */
    // constructor(name) {
    //     this.#name = name
    // }

    /**
     * 
     * @returns {string} The name of the crop.
     */
    getName() {
        return this.#name
    }

    #validateGrowth() {
        if (this.#growth < 0) this.#growth == 0
        if (this.#growth > 1) this.#growth == 1
    }

    /**
     * 
     * @param {number} growthAmount Amount to increase growth as a decimal. Range: 0 to 1
     */
    addGrowth(growthAmount) {
        this.#growth += growthAmount
        this.#validateGrowth()
    }

    /**
     * 
     * @param {number} growthAmount Amount to increase growth as a decimal. Range: 0 to 1
     */
    setGrowth(growthAmount) {
        this.#growth = growthAmount
        this.#validateGrowth()
    }

    /**
     * 
     * @returns {number} The amount the crop has grown. Range: 0 to 1
     */
    getGrowth() {
        return this.#growth
    }

    /**
     * 
     * @returns {boolean} True if the crop is fully grown.
     */
    isGrown() {
        if (this.#growth == 1) return true
        return false
    }

    #validateQuality() {
        if (this.#quality > 10) this.#quality = 10
        if (this.#quality < 0) this.#quality = 0
    }

    /**
     * 
     * @param {number} amountToModify Add or subtract quality. Range -10 to 10
     */
    modifyQuality(amountToModify) {
        this.#quality += amountToModify
        this.#validateQuality()
    }

    /**
     * 
     * @param {number} valueToSet Set the quality. Range 0 to 10
     */
    setQuality(valueToSet) {
        this.#quality = valueToSet
        this.#validateQuality()
    }

    /**
     * 
     * @returns {number} Quality between 0 and 10. 1 is awful, 5 is typical, 10 is excellent
     */
    getQualityValue() {
        return this.#quality
    }

    /**
     * 
     * @returns {string} Description of quality. poor | low | average | good | great | excellent
     */
    getQualityCategory() {
        if (this.#quality < 2) return "poor"
        if (this.#quality < 4) return "low"
        if (this.#quality < 6) return "average"
        if (this.#quality < 8) return "good"
        if (this.#quality < 10) return "great"
        return "excellent"
    }
    
    #validateYield() {
        if (this.#yield < 0) this.#yield = 0
        if (this.#yield > this.#yieldUpperLimit) this.#yield = this.#yieldUpperLimit
    }

    /**
     * 
     * @param {number} amountToModify Add or subtract yield. Default range: -2 to 2
     */
    modifyYield(amountToModify) {
        this.#yield += amountToModify
        this.#validateYield()
    }

    /**
     * 
     * @param {number} valueToSet Set the yielf. Default range: 0 to 2
     */
    setYield(valueToSet) {
        this.#yield = valueToSet
        this.#validateYield()
    }

    /**
     * 
     * @returns The yield. Default range: 0 to 2
     */
    getYield() {
        return this.#yield
    }

    getWeight() {
        return this.#weight
    }
    
}