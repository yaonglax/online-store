import {makeAutoObservable} from 'mobx'
import img1 from '../Images/1.png'
export default class ProductStore {
    constructor() {
        this._categories = []
        this._products = []
        this._selectedCategory = {}
        this._selectedProduct = {}
        this._selectedFlavour = {}
        this._flavours = []
        this._basketProducts = []
        this._orders = []
        this._page = 1
        this._totalCount = 0
        this._limit = 3
    
        makeAutoObservable(this)
    }
    setCategories(categories) {
        this._categories = categories;
    }
    setFlavours(flavours) {
        this._flavours= flavours;
    }
    setOrders(orders) {
        this._orders = orders;
    }
    setProducts(products) {
        this._products = products;
    }
    setBasketProducts(basketProducts) {
        this._basketProducts = basketProducts;
    }
    setSelectedCategory(category) {
        this.setPage(1)
        this._selectedCategory = category;
    }
    setSelectedFlavour(flavour) {
        this.setPage(1)
        this._selectedFlavour = flavour;
    }
    setPage(page) {
        this._page = page
    }
    setTotalCount(count) {
        this._totalCount = count
    }
    get category() {
    return this._categories
    }
    get product() {
        return this._products;
    }
    get order() {
        return this._orders;
    }
    get basketProduct() {
        return this._basketProducts;
    }
    get selectedCategory() {
        return this._selectedCategory;
    }
    get selectedFlavour() {
        return this._selectedFlavour;
    }
    get flavour() {
        return this._flavours;
    }
    get totalCount() {
        return this._totalCount
    }
    get page() {
        return this._page
    }
    get limit() {
        return this._limit
    }
}