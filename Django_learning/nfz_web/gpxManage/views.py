from django.shortcuts import render

# Create your views here.
# from .models import Book, Author, BookInstance, Genre

def index(request):
    """View function for home page of site."""

    # # Generate counts of some of the main objects
    # num_books = Book.objects.all().count()
    # num_instances = BookInstance.objects.all().count()

    # # Available books (status = 'a')
    # num_instances_available = BookInstance.objects.filter(status__exact='a').count()

    # # The 'all()' is implied by default.
    # num_authors = Author.objects.count()

    context = {
        'test': 'hello world',
    }

    # Render the HTML template index.html with the data in the context variable
    return render(request, 'index_test.html', context=context)