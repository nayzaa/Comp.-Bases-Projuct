# Component Bases Project
## Backend
### CRUD product
Create      : POST(body : product) -> /product<br/>
Read(All)   : GET -> /product<br/>
Read(ONE)   : GET -> /product/{id}<br/>
Update(ONE) : POST(body : product) -> /product<br/>
** product ที่มี id เหมือนกับ product ที่จะอัพเดท<br/>
Delete(ONE) : POST -> /product/delete/{id}<br/>

