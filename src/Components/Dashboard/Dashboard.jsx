import React, { useEffect, useState } from "react";
import "./MenuDashboard.css";
import { getProdutos } from "../services/Produto";

function MenuDashboard() {
  const [produtos, setProdutos] = useState([]);
  const [carrinho, setCarrinho] = useState([]);

  useEffect(() => {
    async function fetchProdutos() {
      try {
        const data = await getProdutos();
        setProdutos(data);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error.message);
      }
    }

    fetchProdutos();
  }, []);

  const adicionarAoCarrinho = (produto) => {
    setCarrinho((prev) => {
      const existe = prev.find((item) => item.id === produto.id);
      if (existe) {
        return prev.map((item) =>
          item.id === produto.id ? { ...item, quantidade: item.quantidade + 1 } : item
        );
      }
      return [...prev, { ...produto, quantidade: 1 }];
    });
  };

  const calcularSubtotal = () => {
    return carrinho.reduce((total, item) => total + item.preco * item.quantidade, 0);
  };

  const calcularTaxa = (subtotal) => {
    return subtotal * 0.1; // 10% de taxa
  };

  const handlePlaceOrder = () => {
    if (carrinho.length === 0) {
      alert("Adicione itens ao pedido antes de finalizar.");
      return;
    }
    const pedido = {
      data: new Date().toLocaleString(),
      itens: carrinho,
      subtotal: calcularSubtotal(),
      total: calcularSubtotal() + calcularTaxa(calcularSubtotal()),
    };
    console.log("Pedido realizado:", pedido);
    alert("Pedido realizado com sucesso!");
    setCarrinho([]); // limpa o carrinho
  };

  return (
    <div className="container">
      <header className="navbar">
        <div className="logo">VandaSoft</div>
        <nav className="nav-links">
          <button>Dashboard</button>
          <button className="active">Menu</button>
          <button>Orders</button>
          <button>History</button>
          <button>Stats</button>
        </nav>
        <div className="user-info">
          <span>Cashier</span>
          <strong>Rifki Hayler</strong>
        </div>
      </header>

      <main className="main-layout">
        <aside className="orders-panel">
          <h3>Orders Line</h3>
          <div className="order-card">
            <p>#325401 - Danilo Arguetta</p>
            <span className="status in-progress">In Progress</span>
          </div>
        </aside>

        <section className="menu-section">
          <div className="menu-header">
            <h2>Menu</h2>
            <input type="text" placeholder="Search..." />
          </div>

          <div className="menu-grid">
            {produtos.length === 0 ? (
              <p style={{ gridColumn: "1 / -1" }}>Nenhum produto encontrado.</p>
            ) : (
              produtos.map((item) => (
                <div key={item.id} className="menu-item">
                  <div className="image-placeholder" />
                  <div className="item-details">
                    <h4>{item.nome}</h4>
                    <p>{`R$ ${parseFloat(item.preco).toFixed(2)}`}</p>
                    <button onClick={() => adicionarAoCarrinho(item)}>Add Item</button>
                  </div>
                </div>
              ))
            )}
          </div>
        </section>

        <aside className="order-details">
          <h3>Order Details</h3>
          <p><strong>ID:</strong> #1854241</p>
          <p><strong>Date:</strong> {new Date().toLocaleDateString()}</p>

          <div className="order-type">
            <button>Dine In</button>
            <button>Delivery</button>
            <button>Take Away</button>
          </div>

          <p><strong>Customer:</strong> Jamie Floyd</p>

          <div className="item-list">
            {carrinho.length === 0 ? (
              <p>Nenhum item no pedido.</p>
            ) : (
              carrinho.map((item) => (
                <div key={item.id} className="item-row">
                  <span>{item.nome} x{item.quantidade}</span>
                  <span>R$ {(item.preco * item.quantidade).toFixed(2)}</span>
                </div>
              ))
            )}
          </div>

          <div className="summary">
            <p>Total Items: {carrinho.reduce((s, i) => s + i.quantidade, 0)}</p>
            <p>Subtotal: R$ {calcularSubtotal().toFixed(2)}</p>
            <p>Tax (10%): R$ {calcularTaxa(calcularSubtotal()).toFixed(2)}</p>
            <hr />
            <p><strong>Total: R$ {(calcularSubtotal() + calcularTaxa(calcularSubtotal())).toFixed(2)}</strong></p>
            <button className="place-order" onClick={handlePlaceOrder}>Place Order</button>
          </div>
        </aside>
      </main>
    </div>
  );
}

export default MenuDashboard;
