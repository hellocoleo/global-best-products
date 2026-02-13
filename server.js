const express = require('express');
const app = express();
const products = [
  { id: 1, name: 'Nordic Naturals Ultimate Omega', category: '鱼油', price: 299, desc: 'IFOS五星认证，EPA/DHA 1280mg' },
  { id: 2, name: 'Sony WF-1000XM5', category: '降噪耳机', price: 1999, desc: '主动降噪42dB，8小时续航' },
  { id: 3, name: 'Oral-B iO Series 9', category: '电动牙刷', price: 1499, desc: '40000次/分钟微震动，智能压感' }
];
app.get('/', (req, res) => {
  res.send(`
    <html>
      <head><title>全球最佳商品</title></head>
      <body style="font-family: sans-serif; max-width: 800px; margin: 50px auto;">
        <h1 style="color: #2563eb;">✅ 全球最佳商品百科全书</h1>
        <p style="font-size: 1.2rem; color: #374151;">部署成功！API已就绪</p>
        <h2 style="margin-top: 2rem;">📦 当前商品</h2>
        <ul style="list-style: none; padding: 0;">
          ${products.map(p => `
            <li style="background: #f3f4f6; margin: 1rem 0; padding: 1rem; border-radius: 0.5rem;">
              <strong style="font-size: 1.1rem;">${p.name}</strong>
              <span style="color: #2563eb; font-weight: bold; margin-left: 1rem;">¥${p.price}</span>
              <p style="color: #6b7280; margin-top: 0.5rem;">${p.desc}</p>
              <small style="color: #9ca3af;">${p.category}</small>
            </li>
          `).join('')}
        </ul>
        <p style="margin-top: 2rem;">
          <a href="/api/products" style="background: #2563eb; color: white; padding: 0.5rem 1rem; text-decoration: none; border-radius: 0.375rem;">
            📡 查看API数据
          </a>
        </p>
      </body>
    </html>
  `);
});
app.get('/api/products', (req, res) => {
  res.json({ success: true, data: products });
});
app.listen(3000, () => console.log('✅ 服务器运行中'));
