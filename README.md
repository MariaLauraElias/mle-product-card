# MLE-product-card

Este es un paquete de prueba de despliegue NPM

### Laura Elias

## Ejemplo

```
import {ProductCard, ProductImage, ProductTitle, ProductButtons} from 'mle-product-card';
```
```
<ProductCard
          product={product}
          className="bg-dark"
          initialValues={{
            count: 4,
            maxCount: 10
          }}
        >
          {({ reset, increaseBy, count, isMaxCountReached, maxCount }) => (
            <>
              <ProductImage />
              <ProductTitle />
              <ProductButtons />
            </>
          )}
        </ProductCard>
```
