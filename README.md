# Component Bases Project
## Backend
### CRUD product
Create      : POST(body : product) -> /product
Read(All)   : GET -> /product
Read(ONE)   : GET -> /product/{id}
Update(ONE) : POST(body : product) -> /product
** product ที่มี id เหมือนกับ product ที่จะอัพเดท
Delete(ONE) : POST -> /product/delete/{id}

