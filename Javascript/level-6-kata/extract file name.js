// extract file name

// You have to extract a portion of the file name as follows:

// Assume it will start with date represented as long number
// Followed by an underscore
// Youll have then a filename with an extension
// it will always have an extra extension at the end
// Inputs:
// 1231231223123131_FILE_NAME.EXTENSION.OTHEREXTENSION

// 1_This_is_an_otherExample.mpg.OTHEREXTENSIONadasdassdassds34

// 1231231223123131_myFile.tar.gz2
// Outputs
// FILE_NAME.EXTENSION

// This_is_an_otherExample.mpg

// myFile.tar
// The recommend way to solve it is using RegEx and specifically groups.

class FileNameExtractor {
    static extractFileName (file) {
         return file.replace(/\d+./, '').split('.').slice(0, -1).join('.')
  }
}