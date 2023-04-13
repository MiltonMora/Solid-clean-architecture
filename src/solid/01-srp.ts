/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
(() => {
    interface Product { 
        id:   number;
        name: string;
    }

    class ProductService {

        private httpAdatter: Object | undefined;

        getProduct( id: number ) {
            // Realiza un proceso para obtener el producto y retornarlo
            console.log('Producto: ',{ id, name: 'OLED Tv' });
        }

        saveProduct( product: Product ) {
            // Realiza una petición para salvar en base de datos 
            console.log('Guardando en base de datos', product );
        }
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    class Mailer {
        // eslint-disable-next-line @typescript-eslint/no-inferrable-types
        private masterEmail: string = 'gato@gato.com';

        sendEmail (
            _emailList: string[],
            _template: 'to-clients' | 'to-cats',
            _message: string
            ) {
                console.log('Enviando correo a los clientes');
        }
        
    }
    
    // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
    // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
    class ProductBloc {

        constructor(
            private productService: ProductService,
            private mailer: Mailer
        ) {}
    
        loadProduct( id: number ) {
            this.productService.getProduct(id)
        }
    
        saveProduct( product: Product ) {
            this.productService.saveProduct(product)
        }
    
        notifyClients() {
            this.mailer.sendEmail(['gatus@gatos.com'], 'to-cats', 'hola gato')
        }
    
    }

    class CartBloc {

        // eslint-disable-next-line @typescript-eslint/ban-types
        private itemsInCart: Object[] = [];

        onAddToCart( productId: number ) {
            console.log('Agregando al carrito ', productId );
        }
    }
    
    const productService = new ProductService();
    const mailer = new Mailer();

    const productBloc = new ProductBloc( productService, mailer );
    const cartBloc = new CartBloc();

    productBloc.loadProduct(10);
    productBloc.saveProduct({ id: 10, name: 'OLED TV' });
    productBloc.notifyClients();
    cartBloc.onAddToCart(10);

})();