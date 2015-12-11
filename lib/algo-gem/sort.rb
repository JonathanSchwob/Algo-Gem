# overwrite the Array class
# with different algorithms

# "self" is the array
class Array

  def selection_sort
    sorted = Array.new
    self.length.times do
      sorted.push(self.delete(self.min))
    end
    return sorted
  end


# # Sample implementation of quicksort and mergesort in ruby
# # Both algorithm sort in O(n * lg(n)) time
# # Quicksort works inplace, where mergesort works in a new array
#   def quicksort(array, from=0, to=nil)
#       if to == nil
#           # Sort the whole array, by default
#           to = array.count - 1
#       end

#       if from >= to
#           # Done sorting
#           return
#       end

#       # Take a pivot value, at the far left
#       pivot = array[from]

#       # Min and Max pointers
#       min = from
#       max = to

#       # Current free slot
#       free = min

#       while min < max
#           if free == min # Evaluate array[max]
#               if array[max] <= pivot # Smaller than pivot, must move
#                   array[free] = array[max]
#                   min += 1
#                   free = max
#               else
#                   max -= 1
#               end
#           elsif free == max # Evaluate array[min]
#               if array[min] >= pivot # Bigger than pivot, must move
#                   array[free] = array[min]
#                   max -= 1
#                   free = min
#               else
#                   min += 1
#               end
#           else
#               raise "Inconsistent state"
#           end
#       end

#       array[free] = pivot

#       quicksort array, from, free - 1
#       quicksort array, free + 1, to
#   end
end
