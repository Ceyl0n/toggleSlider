export const state = () => {
  return {

    slidesOne: [
      { id: "1-1", title: 'Slide 1-1' },
      { id: "1-2", title: 'Slide 1-2' },
      { id: "1-3", title: 'Slide 1-3' },
      { id: "1-4", title: 'Slide 1-4' },
      { id: "1-5", title: 'Slide 1-5' },
      { id: "1-6", title: 'Slide 1-6' }
    ],

    slidesTwo: [
      { id: "2-1", title: 'Slide 2-1' },
      { id: "2-2", title: 'Slide 2-2' },
      { id: "2-3", title: 'Slide 2-3' },
      { id: "2-4", title: 'Slide 2-4' },
      { id: "2-5", title: 'Slide 2-5' },
      { id: "2-6", title: 'Slide 2-6' }
    ],

  }
}

export const getters = {
  /**
   * @return  Array
   */
  slidesOne(state) {
    return state.slidesOne;
  },

  /**
   * @return  Array
   */
  slidesTwo(state) {
    return state.slidesTwo;
  },
}

export const mutations = {

}

export const actions = {

}
