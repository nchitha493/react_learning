import React,{useState,useEffect, useReducer} from 'react';

const defaultValue = {
    showCart:false,
    cartClose:()=>{

    },
    openCart:(()=>{}),
    items:[],
    totalItem:0,
    totalAmount:0,
    addItem:(item)=>{},
    removeItem:(id)=>{}
}
const cartContext =React.createContext(defaultValue);
export const CartContextProvider = (props) =>{


    const [showCart,setShowCart]=useState(false)
    const totalItemFinder=(items)=>{
        
        const totalQuan = items.reduce((currentCount,item)=>{
             currentCount=currentCount+parseInt(item.quan);return currentCount},0)
             console.log("s",totalQuan)
             return totalQuan
    }
    const totalAmountFinder=(items)=>{
        
        const totalPrice = items.reduce((currentCount,item)=>{
             currentCount=currentCount+(parseInt(item.quan)*parseFloat(item.price));return currentCount},0)
             return totalPrice.toFixed(2)
    }
    const [items_total_item,dispatchItems]=useReducer((curItems,action)=>{
        console.log("curItems",curItems,action)
        if(action.type ==='addItem'){
            if( !(curItems.items.some((o)=>{return o["id"] === action.newItem["id"];}))){
                console.log("inside Handler",0);
                const brandNewItems =[...curItems.items,action.newItem]
                return {items:brandNewItems,totalItem:totalItemFinder(brandNewItems),totalAmount:totalAmountFinder(brandNewItems)}
                // setItems((prevItem)=> {
                //     console.log([...prevItem,newItem])
                //     return [...prevItem,newItem]
                // })
            }else{

                const updatingItem= curItems.items
                var foundIndex = updatingItem.findIndex(x => x.id == action.newItem.id);
                updatingItem[foundIndex] ={...updatingItem[foundIndex],"quan":action.newItem.quan};
                console.log(updatingItem)
                const brandNewItems =[...updatingItem]
                    return {items:[...updatingItem],totalItem:totalItemFinder(brandNewItems),totalAmount:totalAmountFinder(brandNewItems)}
            }
        }
        if(action.type ==='incrementItem'){

                const updatingItem= curItems.items
                var foundIndex = updatingItem.findIndex(x => x.id == action.id);
                if(!(updatingItem[foundIndex].quan >=5)){
                    updatingItem[foundIndex] ={...updatingItem[foundIndex],"quan":parseInt(updatingItem[foundIndex].quan)+1};
                    console.log(updatingItem)
                    const brandNewItems =[...updatingItem]
                    return {items:[...updatingItem],totalItem:totalItemFinder(brandNewItems),totalAmount:totalAmountFinder(brandNewItems)}
                }else{
                     return curItems
                }
        }
        if(action.type ==='decrementItem'){

            const updatingItem= curItems.items
            var foundIndex = updatingItem.findIndex(x => x.id == action.id);
            if(!(updatingItem[foundIndex].quan <= 1)){
                updatingItem[foundIndex] ={...updatingItem[foundIndex],"quan":parseInt(updatingItem[foundIndex].quan)-1};
                console.log(updatingItem)
                const brandNewItems =[...updatingItem]
                return {items:[...updatingItem],totalItem:totalItemFinder(brandNewItems),totalAmount:totalAmountFinder(brandNewItems)}
            }else{
                let brandNewItems =updatingItem.splice(foundIndex, 1);
                brandNewItems =[...updatingItem]
                return {items:brandNewItems,totalItem:totalItemFinder(brandNewItems),totalAmount:totalAmountFinder(brandNewItems)}
            }
        }

        return curItems

    },{items:[],totalItem:0})

    const cartClose=()=>{
    setShowCart(false)
    }
    const openCart =()=>{
    setShowCart(true)
    }
    const addItemHandler= (newItem)=>{
        dispatchItems({type:"addItem",newItem})
    }
    const incrementItemHandler = (id)=>{
        dispatchItems({type:"incrementItem",id})
    }
    const decrementItemHandler = (id)=>{
        dispatchItems({type:"decrementItem",id})
    }
    useEffect(()=>{
        console.log("from store",items_total_item)
    },[items_total_item])
    const removeItemHandler= ()=>{
        
    }
    return (
        <cartContext.Provider value=
           {{   showCart:showCart,
                cartClose:()=>{cartClose()},
                openCart:(()=>{openCart()}),
                items:items_total_item.items,
                totalAmount:items_total_item.totalAmount,
                totalItem:items_total_item.totalItem,
                addItem:(item)=>{addItemHandler(item)},
                removeItem:(id)=>{removeItemHandler()},
                incrementItem:(id)=>{incrementItemHandler(id)},
                decrementItem:(id)=>{decrementItemHandler(id)}
            }}>
            {props.children}
        </cartContext.Provider>
    )
}

export default cartContext