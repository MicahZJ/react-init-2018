import { configure } from 'mobx';

import homePage from './pages/home_page/store'
import todo from './pages/to_do/store'
import hotNews from './pages/hot_news/store'

configure({ enforceActions: "always" })

class AppStore {
  constructor() {
    this.homePageStore = new homePage(this)
    this.todoStore = new todo(this)
    this.hotNewsStore = new hotNews(this)
  }
}

export default new AppStore()