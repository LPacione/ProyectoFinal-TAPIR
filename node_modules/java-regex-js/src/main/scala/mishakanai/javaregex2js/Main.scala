package mishakanai.javaregex2js
import java.util.regex.Pattern
import scala.scalajs.js.Function1
import scala.scalajs.js.annotation.JSExportTopLevel

package object Main {
    @JSExportTopLevel("compile")
    def compile(
        regex: String,
    ): Function1[String, Boolean] = {
        val p = Pattern.compile(regex)
        (input: String) => p.matcher(input).matches()
    }
}