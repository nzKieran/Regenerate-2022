class PlanterBox {
    #numberOfcropSlots = 1
    #cropSlots = []

    /**
     * 
     * @param {number} numberOfSlots Set the number of available slots to plant crops. Range > 0
     */
    setNumberOfCropSlots(numberOfSlots) {
        this.#numberOfcropSlots = numberOfSlots
    }

    /**
     * 
     * @param {Crop} crop The crop to plant. Usage: addCrop(new Carrot())
     * @returns {boolean} True if the crop planted successfully.
     */
    addCrop(crop) {
        if (this.cropSlots.length >= this.numberOfcropSlots) return false
        this.cropSlots.push(crop)
        return true
    }

    /**
     * 
     * @returns {Map<Crop, number>} Map<crop, weightOfHavest>
     */
    harvestCrops() {
        let harvest = new Map()
        let unhavestedCrops = []
        this.#cropSlots.forEach(i => {
            if (i.getGrowth() == 1) {
                let weightOfHarvest = i.getWeight() * i.getYield()
                harvest.set(i, weightOfHarvest)
            } else {
                unhavestedCrops.push(i)
            }
        });
        this.#cropSlots = unhavestedCrops
        return harvest
    }

    
}