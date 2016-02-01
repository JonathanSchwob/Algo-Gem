# You've just discovered a square (NxN) field and you notice a warning sign.
# The sign states that there's a single bomb in the 2D grid-like field in front of you.
# Write a method mineLocation that accepts a 2D array, and returns the location of the mine.
# The mine is represented as the integer 1 in the 2D array. Areas in the 2D array that are not the mine will be represented as 0s.
# The location returned should be an array where the first element is the row index,
# and the second element is the column index of the bomb location (both should be 0 based).
# All 2D arrays passed into your function will be square (NxN), and there will only be one mine in the array.

# Examples:

# mineLocation( [ [1, 0, 0], [0, 0, 0], [0, 0, 0] ] ) => returns [0, 0]
# mineLocation( [ [0, 0, 0], [0, 1, 0], [0, 0, 0] ] ) => returns [1, 1]
# mineLocation( [ [0, 0, 0], [0, 0, 0], [0, 1, 0] ] ) => returns [2, 1]

def mineLocation field
  field.each_with_index do |x, i|
    return i, x.index(1) if x.include? 1
  end
end

def mineLocation(field)
  field.flatten.index(1).divmod field.size
end

def mineLocation field
  field.each_with_index do |x, i|
    x.each_with_index do |y, t|
      if field[i][t] == 1
        return [i, t]
      end
    end
  end
end
