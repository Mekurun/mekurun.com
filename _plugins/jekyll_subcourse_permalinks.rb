module Jekyll
  class PermalinkRewriter < Generator
    safe true
    priority :low

    def generate(site)
      site.collections.each do |item|
        item.each_with_index do |category, i|
          if category.to_s == 'courses'
            item[i + 1].docs.each do |page|
              @parent = page.data['parent']
              @category = page.data['category']
              if @parent.nil?
                page.data['permalink'] = "/#{@category}/:title/"
              else
                page.data['permalink'] = "/#{@category}/#{@parent}/:title/"
              end
            end
          end
        end
      end
    end
  end
end
