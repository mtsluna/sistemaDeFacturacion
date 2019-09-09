package api.main.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import api.main.entity.Producto;

@Repository()
public interface ProductoRepository extends JpaRepository<Producto, Integer>, PagingAndSortingRepository<Producto, Integer>{

}
