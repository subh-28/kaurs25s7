#Name:Jasmeen Kaur, Suhpreet Kaur
#Date: June 5 , 2025
#last modified: June 8, 2025
#Description: This application allow user to add , search and list all the books . this information is stored in the CSV file

import csv

#defining the fucntion to add the book
def add_book():
    #asking the user for the details of book
    title=input("Enter the name of the book you want to add :")
    author =input("Enter the author's name :")
    year=input("Enter the year of publication:")

    #here 'a' append is used so that new book is added to the end without deleting the existing one
    with open('books.csv','a',newline='') as csvfile:
        #create a CSV witer object
        writer=csv.writer(csvfile)
        #book details written as a row
        writer.writerow([title,author,year])
        #message displaying that book has been added
        print(f"'{title}' has been added to your reading list")

#defining the fucntion to list all the books that the user added
def list_books():
        #opening the csv file in read mode
        with open('books.csv', newline='') as csvfile:
            #create a csv reader object
            reader = csv.reader(csvfile)
            #displaying all the books in the CSV
            print("Your Reading List:")
            #go through each row
            for row in reader:
                #print the details of book from eaach row
                print(f"Title: {row[0]}, Author: {row[1]}, Year: {row[2]}")
            print()

#defining the fucntion for searching the book    
def search_book():
    #the user is allowed to search the book by its title
    search_by_title=input("Enter the title of book to search :")
    #used boolean to check if the book was focund or not
    found=False
    #opening the CSV in reading mode
    with open('books.csv', newline='') as csvfile:
            #create a reader object
            reader = csv.reader(csvfile)
            #go through each row
            for row in reader:
                #if the book was found , its details are displayed
                if search_by_title in row[0]:
                    print("Book found:")
                    print("Title:", row[0])
                    print("Author:", row[1])
                    print("Year:", row[2])
                    #book found and searching is stoppped
                    found = True
                    break
    #in case of failure , message is displayed
    if not found:
       print("No book found. Try adding one first.")
       return

#main menu asking the user to choose an option  
def choose_option():
    #continually showing menu until the user quit the program
    while True:
        #welcome message
        print("Welcome to Reading list manager")
        #options
        print("1. Add a book")
        print("2. View all books")
        print("3. Search a book ")
        print("4. Quit")
        #asking for user's choice
        choice=input("Choose from  above four options :")
       
        #fucntions called acc to user choice
        if choice=="1":
            add_book()
        elif choice=="2":
            list_books()
        elif choice=="3":
            search_book()
        #program ends and loop is broken
        elif choice=="4":
            break
        #error message in case of invalid input
        else:
            print("Error- enter a number between 1 and 4")

#this will start the program with main menu
choose_option()

                   

       
       


 
