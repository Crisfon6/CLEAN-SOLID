(() => {

    interface Product { 
        id:   number;
        name: string;
    }
    class ProductService{
        getProduct(id:number){
            console.log('Producto: ',{ id, name: 'OLED Tv' });
        }
        saveProduct(product:Product){
            console.log('Guardando en base de datos', product );
        }
    }
    class Notificaction{
        private email: string = '';

        sendEmail(emailList:string[],template: 'to-clients' | 'to-admins'){
            console.log('Enviando correo a los clientes',template);
        }
    }
    // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
    // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
    class ProductBloc {

        private productService:ProductService;
        private notification: Notificaction;

        constructor(productService:ProductService, notification: Notificaction){
            this.productService = productService;
            this.notification = notification;
        }

        loadProduct( id: number ) {
            // Realiza un proceso para obtener el producto y retornarlo
            this.productService.getProduct(id);
        }
    
        saveProduct( product: Product ) {
            // Realiza una petición para salvar en base de datos 
            this.productService.saveProduct(product);
        }
    
        notifyClients() {
            this.notification.sendEmail(['crisfon6@gmail.com','disruptivecrisfon6@gmail.com'],'to-clients');
        }
    
       
    
    }
    
    class CartBloc{
        private productsCart :number[]= [];

        addToCart(productId:number){
            console.log('Agreando al carrito',productId);
            this.productsCart.push(productId)
        }
    }
    
    const productService = new ProductService();
    const notification = new Notificaction();
    const productBloc = new ProductBloc(productService,notification);
    const cartBloc = new CartBloc();

    productBloc.loadProduct(10);
    productBloc.saveProduct({ id: 10, name: 'OLED TV' });
    productBloc.notifyClients();
    cartBloc.addToCart(10);








})();