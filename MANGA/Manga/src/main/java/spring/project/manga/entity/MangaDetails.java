package spring.project.manga.entity;

import java.sql.Date;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "mangadetails")
public class MangaDetails {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int bookId;
	private String bookName;
	private String authorName;
	
	private int price;
	private Date publishedOn;
	
	
	public int getBookId() {
		return bookId;
	}


	public void setBookId(int bookId) {
		this.bookId = bookId;
	}


	public String getBookName() {
		return bookName;
	}


	public void setBookName(String bookName) {
		this.bookName = bookName;
	}


	public String getAuthorName() {
		return authorName;
	}


	public void setAuthorName(String authorName) {
		this.authorName = authorName;
	}


	


	public int getPrice() {
		return price;
	}


	public void setPrice(int price) {
		this.price = price;
	}


	public Date getPublishedOn() {
		return publishedOn;
	}


	public void setPublishedOn(Date publishedOn) {
		this.publishedOn = publishedOn;
	}
	


	public MangaDetails(int bookId, String bookName, String authorName, String avaliable, int price, Date publishedOn) {
		super();
		this.bookId = bookId;
		this.bookName = bookName;
		this.authorName = authorName;
			
		this.price = price;
		this.publishedOn = publishedOn;
	}


	public MangaDetails(){
		
	}
	
}
