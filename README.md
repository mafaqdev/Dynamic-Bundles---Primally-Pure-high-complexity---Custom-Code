Dynamic Bundles 

Rebuy’s Dynamic Bundle Widget allows your customers to add multiple products to cart with a single click. By doing this, tracking inventory on each of the individual products is much easier. For store son Shopify Plus, this widget can also be paired with Shopify Scripts, to discount the bundle product if it’s kept together, or to remove the discount if one of those items is removed.

Example 1 - Primally Pure (high complexity)

Primally Pure uses Rebuy’s Dynamic Bundling widget to take over their PDP. All of the products in their Kits are individual products that have selectable variants. When a customer clicks the Add to Cart button, each individual product will be added to cart and Shopify Scripts dynamically discounts them. If one of the products is removed from cart, Shopify Scripts will remove the discount and bring all the products back to their original price.

To achieve this, we highly recommend a developer. 

From a high level you would: 

Create a separate bundle SKU product in Shopify, where the price of the SKU price would equal the total price of the dynamic bundle components. 

Create a dynamic bundle widget with a custom template to match the look and feel of your online store, hide product images, hide check boxes, and hide prices of the component products. 

Create a custom product page template in Shopify which would apply to all bundle products that hides the native add to cart button.

Place the Rebuy widget where the add to cart button would normally be, either using an app block for 2.0 themes, or using dynamic placement

The rules in the Data Source connected to the bundle would say IF anything , RETURN Specific Products > select all component products. Don't forget to set the widget discount! 

Insert the following code snippet into the product page template: <div data-rebuy-id="xxxxx">

^ Replace xxxxx with the Widget ID. 

(Optional) Create a Shopify Script that discounts the component products when the bundle remains in tact 
